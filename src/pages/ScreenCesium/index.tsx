import React,{PureComponent, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux' 
import {Cartesian3} from 'cesium'
import {Viewer,Entity } from 'cesium-react'
import {Post} from '../../components/Post'

interface Iprops{

}

class Cesium extends PureComponent<any,any>{


    constructor(props:Iprops){
        super(props);
    }


    render(){
        return(
            <>
                <Viewer full>
                    <Entity 
                    name="tokyo"
                    position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
                    point={{ pixelSize: 10 }}>
                        Cesium-test                        
                    </Entity>
                </Viewer>
            </>
        )
    }


}


export default Cesium
