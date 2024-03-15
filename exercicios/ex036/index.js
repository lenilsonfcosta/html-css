// ? :
const pontuaçaoUsuario = 900;
const nivelUsuario = pontuaçaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';
const corUsuario = 'pink'
const corPadrao = corUsuario || 'preta';
console.log(nivelUsuario, corPadrao);

/*const pontuaçaoUsuario = 999;
if (pontuaçaoUsuario >= 1000) {
    console.log('Usuáio Vip');
} else {
    console.log('Usuário normal');
}*/