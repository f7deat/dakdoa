import { Carousel, Empty } from "antd"

const NestedCarousel : React.FC = () => {
    return (
        <div>
            <Carousel dots={false}>
            <Empty />
            <Empty />
        </Carousel>
        <button>dot</button>
        <button>dot</button>
        </div>
    )
}
export default NestedCarousel