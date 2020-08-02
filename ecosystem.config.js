module.exports = {
  apps : [{
    name          : 'omagro',
    script        : 'npx',
    interpreter   : 'none',
    args          : 'serve build -s',
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key  : '~/.ssh/aws-divya.pem',
      user : 'ubuntu',
      host : '15.207.65.199',
      ref  : 'origin/master',
      repo : 'https://github.com/rajawatyagya/divya-om.git',
      path : '/var/www/',
      "ssh_options": "StrictHostKeyChecking=no",
      'pre-deploy-local': '',
      'post-deploy' : 'yarn && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      "env"  : {
        "NODE_ENV": "production"
      }
    }
  }
};
