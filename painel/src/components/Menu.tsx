import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './Icons'

export default function Menu(props) {

    return (
        <ul className={`flex justify-end items-stretch`}>
            <MenuItem url="https://artigos.prodam.dev" text="Artigos" />
            <MenuItem url="https://projects.prodam.dev" text="Projetos" />
            <MenuItem url="https://templates.prodam.dev" target='_blank' text="Templates" />
            <MenuItem url="https://vue.prodam" target='_blank' text="Vue" />
            <MenuItem url="https://next.prodam" target='_blank' text="Next" />
        </ul>
    )
}