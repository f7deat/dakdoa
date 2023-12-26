import { FormattedMessage, Link } from "umi";
import logo from '../assets/logo/logo-white.svg';
import paper from '../assets/icons/paper-airplane.svg';
import globe from '../assets/icons/globe.svg';
import phone from '../assets/icons/phone.svg';

type FooterProps = {
    height: number;
    fixed?: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {

    const { height, fixed } = props;

    const ContactItem = (icon: string, title: string, description: string) => (
        <div className="flex gap-4">
            <div className="h-10 md:h-12 w-10 md:w-12 rounded-full flex items-center justify-center bg-[#815332]">
                <img src={icon} alt="ICON" loading="lazy" />
            </div>
            <div className="hidden md:block">
                <div className="text-xs md:text-base">{title}</div>
                <div className="font-bold text-xs md:text-base">{description}</div>
            </div>
        </div>
    )

    return (
        <>
            <footer className={`bg-[#484f1f] bottom-0 left-0 right-0 transition-height duration-500 ${fixed ? 'fixed' : ''}`} style={{
                height: height
            }}>
                <div className="md:px-20 mx-auto px-4 text-white flex flex-col justify-between h-full">
                    <div className="flex-1 flex items-center">
                        <div className="flex-1">
                            <Link to='/'>
                                <img src={logo} alt="LOGO" loading="lazy" />
                            </Link>
                        </div>
                        <div className="flex gap-4 md:gap-40">
                            {ContactItem(paper, 'Email:', 'congtyshinecgialai@gmail.com')}
                            {ContactItem(phone, 'Hotline:', '02253.645.365')}
                            {ContactItem(globe, 'Website:', 'shinecgialai.vn')}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between border-t py-2 border-[#ffffff1a]">
                        <div className="hidden md:block">
                            <FormattedMessage id='PRIVACY_POLICY' />
                        </div>
                        <div>
                            © 2023, Shinec Gia Lai
                        </div>
                        <div className="flex gap-4 items-center justify-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_239_1001)">
                                    <path d="M6.50046 9.375C6.50046 7.78725 7.78725 6.49977 9.375 6.49977C10.9628 6.49977 12.2502 7.78725 12.2502 9.375C12.2502 10.9628 10.9628 12.2502 9.375 12.2502C7.78725 12.2502 6.50046 10.9628 6.50046 9.375ZM4.94615 9.375C4.94615 11.8211 6.92893 13.8038 9.375 13.8038C11.8211 13.8038 13.8038 11.8211 13.8038 9.375C13.8038 6.92893 11.8211 4.94615 9.375 4.94615C6.92893 4.94615 4.94615 6.92893 4.94615 9.375ZM12.9441 4.77059C12.9441 5.34187 13.4074 5.80587 13.9794 5.80587C14.5507 5.80587 15.0147 5.34187 15.0147 4.77059C15.0147 4.1993 14.5514 3.73601 13.9794 3.73601C13.4074 3.73601 12.9441 4.1993 12.9441 4.77059ZM5.89017 16.3955C5.04926 16.3572 4.59224 16.2172 4.28848 16.0987C3.88579 15.942 3.59876 15.7553 3.2964 15.4536C2.99473 15.1519 2.80732 14.8649 2.65126 14.4622C2.53283 14.1585 2.39279 13.7014 2.35447 12.8605C2.31267 11.9514 2.30431 11.6783 2.30431 9.375C2.30431 7.07175 2.31337 6.79934 2.35447 5.88947C2.39279 5.04857 2.53352 4.59224 2.65126 4.28778C2.80802 3.8851 2.99473 3.59806 3.2964 3.2957C3.59806 2.99403 3.8851 2.80662 4.28848 2.65057C4.59224 2.53213 5.04926 2.39209 5.89017 2.35378C6.79934 2.31197 7.07245 2.30361 9.375 2.30361C11.6783 2.30361 11.9507 2.31267 12.8605 2.35378C13.7014 2.39209 14.1578 2.53282 14.4622 2.65057C14.8649 2.80662 15.1519 2.99403 15.4543 3.2957C15.756 3.59736 15.9427 3.8851 16.0994 4.28778C16.2179 4.59154 16.3579 5.04857 16.3962 5.88947C16.438 6.79934 16.4464 7.07175 16.4464 9.375C16.4464 11.6776 16.438 11.9507 16.3962 12.8605C16.3579 13.7014 16.2172 14.1585 16.0994 14.4622C15.9427 14.8649 15.756 15.1519 15.4543 15.4536C15.1526 15.7553 14.8649 15.942 14.4622 16.0987C14.1585 16.2172 13.7014 16.3572 12.8605 16.3955C11.9514 16.4373 11.6783 16.4457 9.375 16.4457C7.07245 16.4457 6.79934 16.4373 5.89017 16.3955ZM5.8191 0.802252C4.90087 0.844053 4.27385 0.989661 3.72556 1.20285C3.15845 1.423 2.67774 1.7184 2.19772 2.19772C1.7184 2.67704 1.423 3.15775 1.20285 3.72556C0.989661 4.27385 0.844053 4.90087 0.802252 5.8191C0.759754 6.73873 0.75 7.03273 0.75 9.375C0.75 11.7173 0.759754 12.0113 0.802252 12.9309C0.844053 13.8491 0.989661 14.4762 1.20285 15.0244C1.423 15.5915 1.7177 16.073 2.19772 16.5523C2.67704 17.0316 3.15775 17.3263 3.72556 17.5472C4.27455 17.7603 4.90087 17.9059 5.8191 17.9477C6.73943 17.9895 7.03273 18 9.375 18C11.718 18 12.0113 17.9902 12.9309 17.9477C13.8491 17.9059 14.4762 17.7603 15.0244 17.5472C15.5915 17.3263 16.0723 17.0316 16.5523 16.5523C17.0316 16.073 17.3263 15.5915 17.5472 15.0244C17.7603 14.4762 17.9066 13.8491 17.9478 12.9309C17.9895 12.0106 17.9993 11.7173 17.9993 9.375C17.9993 7.03273 17.9895 6.73873 17.9478 5.8191C17.9059 4.90087 17.7603 4.27385 17.5472 3.72556C17.3263 3.15845 17.0316 2.67774 16.5523 2.19772C16.073 1.7184 15.5915 1.423 15.0251 1.20285C14.4762 0.989661 13.8491 0.843356 12.9316 0.802252C12.012 0.76045 11.718 0.75 9.3757 0.75C7.03273 0.75 6.73943 0.759754 5.8191 0.802252Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_239_1001">
                                        <rect width="17.25" height="17.25" fill="white" transform="translate(0.75 0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 12.375C21 7.61155 17.1384 3.75 12.375 3.75C7.61155 3.75 3.75 7.61155 3.75 12.375C3.75 17.0236 7.42759 20.8133 12.0321 20.9933C11.5712 20.9752 11.1197 20.9208 10.6801 20.8332V14.2659H9.27344V11.921H10.6801V10.5133C10.6801 8.60029 11.4742 7.46289 13.7307 7.46289H15.6093V9.80804H14.435C13.5566 9.80804 13.4985 10.1356 13.4985 10.7471L13.4954 11.9208H15.6225L15.3735 14.2655H13.4954V20.9276C13.1983 20.9662 12.8996 20.9894 12.6003 20.9971C17.2596 20.8776 21 17.0631 21 12.375Z" fill="white" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                <g clipPath="url(#clip0_239_1009)">
                                    <path d="M0.75 2.66485C0.75 2.10982 0.944262 1.65193 1.33277 1.29117C1.72128 0.930406 2.22636 0.750031 2.84797 0.750031C3.4585 0.750031 3.95246 0.927625 4.32987 1.28285C4.71838 1.64916 4.91264 2.12647 4.91264 2.7148C4.91264 3.24762 4.72394 3.69162 4.34652 4.04684C3.95802 4.41316 3.44739 4.59631 2.81467 4.59631H2.79802C2.18749 4.59631 1.69354 4.41316 1.31612 4.04684C0.938701 3.68053 0.75 3.21986 0.75 2.66485ZM0.966458 17.2341V6.11151H4.66289V17.2341H0.966458ZM6.71091 17.2341H10.4073V11.0234C10.4073 10.6349 10.4517 10.3352 10.5405 10.1243C10.6959 9.74688 10.9318 9.42774 11.2482 9.16689C11.5646 8.90603 11.9614 8.7756 12.4387 8.7756C13.682 8.7756 14.3036 9.61368 14.3036 11.2898V17.2341H18V10.8569C18 9.21406 17.6115 7.96805 16.8345 7.11887C16.0574 6.26969 15.0307 5.8451 13.7541 5.8451C12.3222 5.8451 11.2066 6.46118 10.4073 7.69332V7.72662H10.3907L10.4073 7.69332V6.11151H6.71091C6.7331 6.46672 6.74421 7.5712 6.74421 9.42498C6.74421 11.2787 6.7331 13.8818 6.71091 17.2341Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_239_1009">
                                        <rect width="17.25" height="16.4841" fill="white" transform="translate(0.75 0.75)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M9.17495 19.2744C15.6847 19.2744 19.2446 13.8793 19.2446 9.20095C19.2446 9.04774 19.2415 8.89522 19.2346 8.74334C19.9273 8.24194 20.5251 7.62112 21 6.91C20.3659 7.19203 19.6835 7.38185 18.9676 7.46743C19.6983 7.02913 20.2592 6.33573 20.5239 5.50921C19.8292 5.92149 19.0691 6.21212 18.2766 6.36859C17.6307 5.68041 16.7113 5.25 15.6932 5.25C13.7388 5.25 12.1539 6.83553 12.1539 8.78993C12.1539 9.06779 12.185 9.33797 12.2457 9.59721C9.30425 9.44915 6.696 8.04033 4.95042 5.89814C4.63602 6.43844 4.47066 7.0525 4.4712 7.67762C4.4712 8.90595 5.09599 9.99028 6.04614 10.6247C5.48412 10.6075 4.93443 10.4556 4.4433 10.1819C4.44277 10.1967 4.44277 10.2112 4.44277 10.2271C4.44277 11.9417 5.66268 13.3732 7.28208 13.6976C6.97793 13.7805 6.66409 13.8224 6.34886 13.8222C6.12121 13.8222 5.89934 13.7998 5.68372 13.7584C6.13429 15.1651 7.4408 16.1888 8.98983 16.2174C7.77851 17.1672 6.25262 17.7329 4.5942 17.7329C4.31208 17.7331 4.03019 17.7167 3.75 17.6838C5.31631 18.6881 7.17616 19.2741 9.17512 19.2741" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;