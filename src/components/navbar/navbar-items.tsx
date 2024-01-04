import { MenuData } from "@/data"
import { FormattedMessage, Link } from "umi"

type NavbarItemProps = {
    white?: boolean;
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    return (
        <div className={`md:flex hidden font-semibold gap-8 inter ` + (props.white ? 'text-white' : 'text-slate-700')}>
            {
                MenuData.map(menu => (
                    <div key={menu.key}>
                        <Link to={menu.url} className='nav-link'>
                            <FormattedMessage id={menu.label} />
                        </Link>
                    </div>
                ))
            }
            <Link to="/vr360">
                <div className="loader text-red-600 hover:scale-125 transition duration-500">
                    <FormattedMessage id="VR360" />
                    <div className="tile"></div>
                </div>
            </Link>
        </div>
    )
}

export default NavbarItem