type LoaderProps = {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
    return props.loading && (
        <div id="loader">
            <div className="cube-folding">
                <span className="leaf1" />
                <span className="leaf2" />
                <span className="leaf3" />
                <span className="leaf4" />
            </div>
        </div>
    )
}

export default Loader