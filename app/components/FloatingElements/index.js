'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import PlayingCard from './PlayingCard'
import MusicElements from './MusicElements'
import KoreanText from './KoreanText'

const FloatingElements = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Define three parallax layers with different speeds
  const layerConfigs = {
    background: {
      speed: 0.3,
      opacity: 0.6,
      elements: [
        { type: 'card', x: '15%', y: '80%', size: 60 },
        { type: 'korean', x: '80%', y: '60%', text: '안녕', size: 24 },
        { type: 'music', x: '60%', y: '90%', icon: 'note', size: 30 }
      ]
    },
    midground: {
      speed: 0.6,
      opacity: 0.8,
      elements: [
        { type: 'card', x: '70%', y: '30%', size: 100 },
        { type: 'music', x: '20%', y: '40%', icon: 'mic', size: 50 },
        { type: 'korean', x: '45%', y: '70%', text: '리야', size: 36 },
        { type: 'card', x: '85%', y: '85%', size: 80 }
      ]
    },
    foreground: {
      speed: 1.0,
      opacity: 1.0,
      elements: [
        { type: 'music', x: '30%', y: '20%', icon: 'notes', size: 70 },
        { type: 'card', x: '10%', y: '50%', size: 140 },
        { type: 'korean', x: '75%', y: '45%', text: '안녕', size: 48 },
        { type: 'music', x: '90%', y: '25%', icon: 'note', size: 40 }
      ]
    }
  }

  const renderElement = (element, layerSpeed, layerOpacity, index) => {
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, -800 * layerSpeed])
    
    const elementProps = {
      key: `${element.type}-${index}`,
      style: {
        position: 'absolute',
        left: element.x,
        top: element.y,
        y: yOffset,
        opacity: layerOpacity,
        willChange: 'transform'
      }
    }

    switch (element.type) {
      case 'card':
        return (
          <motion.div {...elementProps}>
            <PlayingCard size={element.size} />
          </motion.div>
        )
      case 'music':
        return (
          <motion.div {...elementProps}>
            <MusicElements icon={element.icon} size={element.size} />
          </motion.div>
        )
      case 'korean':
        return (
          <motion.div {...elementProps}>
            <KoreanText text={element.text} size={element.size} />
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {Object.entries(layerConfigs).map(([layerName, config]) =>
        config.elements.map((element, index) =>
          renderElement(element, config.speed, config.opacity, `${layerName}-${index}`)
        )
      )}
    </motion.div>
  )
}

export default FloatingElements