import Router from 'vue-router';
import LoginComponent from '../pages/login/login.vue';
import HomeComponent from '../pages/home/home.vue';
import HomeConteudoComponent from '../pages/home-conteudo/home-conteudo.vue';
import HomeTipoComponent from '../pages/home-tipo/home-tipo.vue';
import MenuComponent from '../pages/menu/menu.vue';
import NivelComponent from '../pages/nivel/nivel.vue';
import TipoConteudoComponent from '../pages/tipoconteudo/tipoconteudo.vue';
import ConteudoComponent from '../pages/conteudo/conteudo.vue';
import UsuarioComponent from '../pages/usuario/usuario.vue';
import NotFound from '../pages/404.vue';

export default new Router({
    mode: 'history',
    routes: [{
            path: '/home',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuComponent,
            children: [{
                    path: '/nivel',
                    name: 'nivel',
                    component: NivelComponent
                },
                {
                    path: '/tipoconteudo',
                    name: 'tipoconteudo',
                    component: TipoConteudoComponent
                },
                {
                    path: '/conteudo',
                    name: 'conteudo',
                    component: ConteudoComponent
                },
                {
                    path: '/usuario',
                    name: 'usuario',
                    component: UsuarioComponent
                }
            ]
        },
        {
            path: '/',
            redirect: {
                name: 'home'
            }
        },
        {
            path: '/homeconteudo',
            name: 'homeconteudo',
            component: HomeConteudoComponent
        },
        {
            path: '/hometipo',
            name: 'hometipo',
            component: HomeTipoComponent
        },
        {
            path: '/404',
            name: '404',
            component: NotFound
        },
        {
            path: '*',
            redirect: {
                name: '404'
            }
        },
    ]
})