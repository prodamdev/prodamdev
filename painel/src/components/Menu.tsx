import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './icons'

export default function Menu(props) {

    return (
        <ul className={`flex justify-end items-stretch`}>
            <MenuItem url="https://prodam.dev/articles" text="Artigos" />
            <MenuItem url="https://prodam.dev/projects" text="Projetos" />
            <MenuItem url="https://templates.prodam.dev" target='_blank' text="Templates" />
            <MenuItem url="https://vue.prodam.dev" target='_blank' text="Vue" />
            <MenuItem url="https://next.prodam.dev" target='_blank' text="Next" />
        </ul>
    )
}