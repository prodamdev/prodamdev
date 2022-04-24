import MenuItem from './MenuItem'
import { LogoutIcon, HomeIcon, SettingsIcon, BellIcon } from './icons'

export default function Menu(props) {
    if (props.type == 1) {
        return (
            <ul className={`flex justify-end items-stretch`}>
                <MenuItem type={props.type} url="https://prodam.dev/articles" text="Artigos" />
                <MenuItem type={props.type} url="https://prodam.dev/projects" text="Projetos" />
                <MenuItem type={props.type} url="https://templates.prodam.dev" target='_blank' text="Templates" />
                <MenuItem type={props.type} url="https://vue.prodam.dev" target='_blank' text="Vue" />
                <MenuItem type={props.type} url="https://next.prodam.dev" target='_blank' text="Next" />
            </ul>
        )
    } else if (props.type == 2) {
        return (
            <ul className={`flex flex-col w-full justify-end items-stretch`}>
                <MenuItem type={props.type} url="https://prodam.dev/articles" text="Artigos" />
                <MenuItem type={props.type} url="https://prodam.dev/projects" text="Projetos" />
                <MenuItem type={props.type} url="https://templates.prodam.dev" target='_blank' text="Templates" />
                <MenuItem type={props.type} url="https://vue.prodam.dev" target='_blank' text="Vue" />
                <MenuItem type={props.type} url="https://next.prodam.dev" target='_blank' text="Next" />
            </ul>
        )
    } else {
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


}