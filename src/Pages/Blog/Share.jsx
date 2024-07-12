import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share";
const Share = ({ url }) => {
    return (
        <div className="flex space-x-4 mt-6">
            <h2 className="text-xl font-semibold">Share : </h2>
            <div className="">
                <FacebookShareButton
                    url={url}
                    quote="Please share this blog"
                    hashtag="#blood donation"
                >
                    {/* <FacebookIcon/> */}
                    <FacebookIcon className="mr-3 rounded-md" size={32} />
                </FacebookShareButton>
                <WhatsappShareButton
                    url={url}
                    quote="Please share this blog"
                    hashtag="#blood donation"
                >
                    <WhatsappIcon className="rounded-lg mr-3" size={32} />
                </WhatsappShareButton>

                <LinkedinShareButton
                    url={url}
                    quote="Please share this blog"
                    hashtag="#blood donation"
                >
                    <LinkedinIcon className="rounded-lg" size={32} />
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default Share