import { motion } from 'framer-motion'

const Animation = () => {
  return (

    <div className='fotball'>
      <motion.div
        className='goal'
        animate={{ x: [200, 1000, 1000, 200] }}
        transition={{ type: 'tween', duration: 10, repeat: Infinity }}
      />
      <motion.div
        className='square'
        drag
        whileDrag={{ scale: 1.5 }}
      />
    </div>
  )
}

export default Animation
