import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Gallery extends Component {
    state = {
        images: [],
        selected: 0
    }
    onClick = (id) => {
        this.setState({
            selected: id
        });
    }
    componentDidMount(){
        const { images = [], thumbnails = [] } = this.props;
        let newImages = [];
        if(images.length > 0){
            images.forEach( (img, index) => {
                newImages.push({
                    id: index,
                    image: img,
                    thumbnail: thumbnails[index] || '',
                })
            });

            this.setState({
                images: newImages
            });
        }

    }
    render() {
        const {images = [], selected = 0} = this.state;

        if(images.length === 0){
            return null;
        }

        let current = [];
        let list = [];
        let classes = {
            active: false
        };

        images.forEach( (v,i) => {
            if(v.id === selected){
                current.push(<div className="single_product_image_background" style={{backgroundImage: `url(${v.image})`}} />)
            }
            classes.active = v.id === selected;

            list.push(
                <li key={i} className={classnames(classes)} onClick={ () => this.onClick(v.id) }><img src={v.thumbnail} alt="" /></li>
            )
        } );

        return (
            <div className="single_product_pics">
                <div className="row">
                    <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                        <div className="single_product_thumbnails">
                            <ul>
                                {list}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 image_col order-lg-2 order-1">
                        <div className="single_product_image">
                            {current}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    images: PropTypes.array,
    thumbnails: PropTypes.array
};

export default Gallery;