import { Helmet } from "umi"
import '../../layouts/comming-soon.css'

const Vr360: React.FC = () => {
    return (
        <div className="h-screen overflow-hidden">
            <Helmet>
                <title>VR 360 - Shinec Gia Lai</title>
                <script src="comming-soon.js"></script>
            </Helmet>
            <main></main>
        </div>
    )
}

export default Vr360