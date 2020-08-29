import React from 'react'
import Preset from './Preset'
import hourglass from '../../../img/preset_hourglass.png'
import pyramid from '../../../img/preset_pyramid.png'
import pyramid_inverted from '../../../img/preset_pyramid_inverted.png'
import rectangle from '../../../img/preset_rectangle.png'
import preset_x from '../../../img/preset_x.png'
import { genTri, genRect, genTriInverted, genHourGlass, genX } from '../../../utils/genPresets'
import { setTri, setRect, setTriInverted, setHourglass, setX } from '../../../actions'

const presets = [
    {img: pyramid, func: genTri, dis: setTri},
    {img: rectangle, func: genRect, dis: setRect},
    {img: pyramid_inverted, func: genTriInverted, dis: setTriInverted},
    {img: hourglass, func: genHourGlass, dis: setHourglass},
    {img: preset_x, func: genX, dis: setX},
]

const Presets = React.memo(() => {
    return (
        <div className='presets-container'>
            {presets.map((p) => <Preset key={p.img} {...p}  />)}
        </div>
    )
})

export default Presets