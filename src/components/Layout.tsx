
function Layout(props: any) {
    
    return (
        <div className='layout'>
            {
                props.imageGallery.map((index: any) => 
                    <div className='card'>
                        <img className='standard-image' src={index}/>
                        <div className='image-info'>
                            <button className='remove-image' onClick={function() { props.removeImg(index) }}> - </button>
                            <h1 className='image-header'> Paris </h1>
                            <p className='image-description'> The eiffel tower </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Layout;