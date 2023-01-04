
function Layout(props: any) {
    


    return (
        <div className='layout'>
            {
                props.imageGallery.map((index: any) => 
                    <div>
                        <img className='standard-image' src={index} />
                    </div>
                )
            }
            {
                props.imageGallery.map((index: any) => 
                    <div>
                        <img className='standard-image' src={index} />
                    </div>
                )
            }
            {
                props.imageGallery.map((index: any) => 
                    <div>
                        <img className='standard-image' src={index} />
                    </div>
                )
            }
        </div>
    )
}

export default Layout;