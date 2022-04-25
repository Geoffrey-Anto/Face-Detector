import * as tf from '@tensorflow/tfjs-core';

export interface NormalizedFace {
    /** The upper left-hand corner of the face. */
    topLeft: [number, number] ;
    /** The lower right-hand corner of the face. */
    bottomRight: [number, number] ;
    /** Facial landmark coordinates. */
    landmarks?: number[][] ;
    /** Probability of the face detection. */
    probability: number ;
}