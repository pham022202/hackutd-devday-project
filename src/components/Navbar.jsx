import { ReactComponent as Logo } from '../assets/logo.svg'

function Navbar(){
    return (
        <nav className="w-screen p-4 bg-secondary">
            <div className="flex gap-2">
                <Logo />
                <h1>
                    Streeamy
                </h1>
            </div>
        </nav>
    )

    }

    export default Navbar;