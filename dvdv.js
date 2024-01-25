const { exec } = require('child_process');

exec('python3 -m venv venv', (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao criar o ambiente virtual: ${error.message}`);
        return;
    }
    console.log(`Ambiente virtual criado: ${stdout}`);
});

exec('venv/bin/pip install requests', (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao instalar o pacote requests: ${error.message}`);
        return;
    }
    console.log(`Pacote requests instalado: ${stdout}`);
});

