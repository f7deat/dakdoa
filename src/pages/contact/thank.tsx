import { CheckOutlined } from "@ant-design/icons";
import { Modal, ModalProps } from "antd";

const ThankComponent: React.FC<ModalProps> = (props) => {
    return (
        <>
            <Modal {...props}
                footer={false}
                centered
            >
                <div className="flex justify-center items-center flex-col gap-4">
                    <div className="bg-green-500 rounded-full h-20 w-20 flex items-center justify-center text-3xl text-white">
                        <CheckOutlined />
                    </div>
                    <div className="text-xl font-semibold text-slate-700">
                        Thank You!
                    </div>
                    <div className="text-slate-500 text-lg text-center">
                        Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ với bạn sớm nhất!
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ThankComponent;