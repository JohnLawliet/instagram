const footerLinks = ["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Top accounts", "Hashtags", "Language"]
const bigFooter = ["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms", "Locations", "Top accounts", "Hashtags", "Locations", "Instagram Lite", "Beauty", "Dance", "Fitness", "Food & drink" , "Home & garden", "Music", "visual arts"]

const Footer = ({size}) => {
    const selectedFooter = size==="big" ? bigFooter : footerLinks

    return (
        <footer className="w-full mt-6 max-w-2xl ">                
            {
                selectedFooter.map(item => (
                    <p className={`inline-block text-gray-400 mr-2 ${size==="big"? 'text-xs' :'text-[10px]'}`}>
                    {item}
                    </p>
                ))
            }
            <div className={`text-gray-400 mt-4 ${size==="big"? 'text-xs flex justify-center' :'text-[10px] '}`}>© {new Date().getFullYear} INSTAGRAM FROM FACEBOOK</div>
        </footer>
    )
}

export default Footer
