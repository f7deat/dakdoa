const GoogleMap: React.FC = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15486.038331836062!2d108.1033014595628!3d13.987771454376816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316ea1bcbdbe3dcd%3A0x399c4960798249b4!2zxJDEg2sgxJBvYSwgVHAuIFBsZWlrdSwgR2lhIExhaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1703816385347!5m2!1svi!2s"
            height={400} className="border-0 w-full" allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default GoogleMap