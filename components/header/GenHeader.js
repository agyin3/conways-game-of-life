import React from 'react'
import { Typography } from '@rmwc/typography'

const GenHeader = React.memo(({text, use='headline2'}) => <Typography use={use} className='header' theme={['onPrimary']}>{text}</Typography>)

export default GenHeader