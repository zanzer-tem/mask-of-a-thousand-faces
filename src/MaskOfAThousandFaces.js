import React from 'react';

class MaskOfAThousandFaces extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            images:new Map(),
            totalImages: 0,
            ctx: null
        };   

        this.canvasReference = React.createRef();
        this.renderCanvas = this.renderCanvas.bind(this);
        this.loadImage = this.loadImage.bind(this);
    }


    componentDidMount() {
        const canvas = this.canvasReference.current;
        this.setState({ctx: canvas.getContext("2d")});
        this.setState({totalImages: 2});
       // this.loadImage(0,'/images/g_m_w_torso.png');
       // this.loadImage(1,'/images/g_m_w_head2.png');
    }


    loadImage(position, url){
        var img = new Image();
        img.src = process.env.PUBLIC_URL + url;
        img.onload = () => {
            var newState = this.state;
            newState.images.set(position,img);
            this.setState(newState);
            if( this.state.images.size === this.state.totalImages){
                this.renderCanvas();
            }
        };
    }

    renderCanvas(){
        

        // flip context horizontally
        //this.state.ctx.scale(-1, 1);
       // this.state.ctx.drawImage(this.state.images.get(0),0,0);
        //this.state.ctx.drawImage(this.state.images.get(1),0,0);
    }

    

    render() {
       return <div className="mask-of-a-thousand-faces">
           <canvas ref={this.canvasReference} width={275} height={350} />
       </div>
    }
}

export default MaskOfAThousandFaces;