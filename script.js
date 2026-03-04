function verUsuario(){
    const user = {name: "matiw", role: 'student'};
    console.log(`El usuario es ${user.name} y su rol es ${user.role}`);
    console.log('el usuario es ' + user.name);
}

document.addEventListener('DOMContentLoaded', () => {
    verUsuario();
});