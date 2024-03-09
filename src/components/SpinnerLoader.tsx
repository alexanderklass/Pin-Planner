import React from 'react';
import { motion } from 'framer-motion';

const SpinnerLoader = () => {
    return (
        <motion.div
            style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                border: '5px solid #f3f3f3',
                borderTop: '5px solid #555',
            }}
            animate={{
                rotate: 360,
            }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 1,
            }}
        />
    );
};

export default SpinnerLoader;
