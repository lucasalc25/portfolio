class Load1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Load1', active: false });
    }

    init(data) {
        this.width = this.game.canvas.width;
        this.height = this.game.canvas.height;
        this.loaded = false;

        

    }

    async preload() {
        this.load.plugin('rexroundrectangleplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexroundrectangleplugin.min.js', true);
        this.load.plugin('rexsliderplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsliderplugin.min.js', true);
        this.load.audio('menuMusic', './assets/sfx/war.mp3');
        this.load.image('bgMenu', './assets/img/bgMenu.jpg');
        this.load.image('configWindow', './assets/img/configWindow.png');
        this.load.image('musicOn', './assets/img/music-on.png');
        this.load.image('musicOff', './assets/img/music-off.png');
        this.load.image('supportBtn1', './assets/img/support-button1.png');
        this.load.image('supportBtn2', './assets/img/support-button2.png');
        this.load.image('backBtn1', './assets/img/back-button1.png');
        this.load.image('backBtn2', './assets/img/back-button2.png');
        this.load.audio('hover', './assets/sfx/interface.mp3');
        this.load.audio('select', './assets/sfx/decide.mp3');
        this.load.audio('select2', './assets/sfx/select2.mp3');

        // Gera e armazena um identificador único para o dispositivo do jogador
        let deviceId = localStorage.getItem('deviceId')
        if (!deviceId) {
            deviceId = crypto.randomUUID()
            localStorage.setItem('deviceId', deviceId)
        }

        console.log(this.supabase); // Verifique o conteúdo de `supabase`

        // Verifique se o supabase está disponível
        if (!this.supabase) {
            console.error('Supabase não está disponível na cena Load1');
            return;
        }

        // Função para carregar os dados do jogador
        async function loadPlayerData() {
            // Busca os dados do jogador com o deviceId no Supabase
            const { data, error } = await this.supabase
                .from('players')
                .select('*')
                .eq('device_id', deviceId)
                .single()

            if (error) {
                console.error('Erro ao carregar dados do jogador:', error)
                return null
            }

            return data
        }

        // Função para criar um novo registro de jogador
        async function createNewPlayer(playerName) {
            const { data, error } = await this.supabase
                .from('players')
                .insert([{ id: deviceId, name: playerName, difficulty_level: 'fácil', device_id: deviceId, progress: 0, score: 0 }])

            if (error) {
                console.error('Erro ao criar novo jogador:', error)
            } else {
                console.log('Novo jogador criado com sucesso:', data)
            }
        }

        // Carrega os dados do jogador
        const playerData = await loadPlayerData()

        if (playerData) {
            // Dados do jogador encontrados
            console.log('Dados do jogador carregados:', playerData)
            this.playerData = playerData // Salva os dados na cena para uso posterior
        } else {
            // Solicita o nome do jogador, pois os dados não foram encontrados
            const playerName = prompt('Bem-vindo! Escolha um nome para começar:')

            if (playerName) {
                // Cria novo jogador no banco de dados
                await createNewPlayer(playerName)

                // Recarrega os dados do jogador após criar o registro
                this.playerData = await loadPlayerData()
            }
        }
        
        if (!localStorage.getItem("musicVolume")) {
            localStorage.setItem("musicVolume", 0.5);
        }

        if (!localStorage.getItem("soundVolume")) {
            localStorage.setItem("soundVolume", 0.3);
        }

        this.createLoadingBar();
    }

    create() {

    }

    update() {
        if (this.loaded) {
            this.scene.stop('Load1');
            this.scene.start('Home');
        }
    }

    createLoadingBar() {
        // Barra de progresso
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x01B2DE, 0.8);
        progressBox.fillRect(this.width / 6, this.height / 2, this.width / 1.5, 30);


        const loadingText = this.make.text({
            x: this.width / 2,
            y: this.height / 2 - 20,
            text: 'Carregando...',
            style: {
                fontFamily: 'Cooper Black',
                fontSize: '20px',
                fill: '#01B2DE'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        const percentText = this.make.text({
            x: this.width / 2,
            y: this.height / 2 + 15,
            text: '0%',
            style: {
                fontFamily: 'Cooper Black',
                fontSize: '18px',
                fill: '#FFFFFF',

            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(this.width / 6, this.height / 2, (this.width / 1.5) * value, 30);

            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('complete', () => {
            this.loaded = true;
        });
    }
}