

type TRoute = {
    name: string,
    path: string
}

export const routes: Array<TRoute> = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Noticias', path: '/noticias' },
    { name: '', path: 'crear'}
]

export enum Routes {
    home = '/',
    aboutUs = '/sobre-nosotros',
    services = '/servicios',
    news = '/noticias',
    signIn = '/iniciar-sesion',
    signUp = '/crear-cuenta',
    forgotPassword = '/cambiar-contraseña'
}