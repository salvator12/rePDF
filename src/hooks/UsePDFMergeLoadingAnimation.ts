import { useEffect } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
    withDelay
} from 'react-native-reanimated';

export const UsePDFMergeLoadingAnimation = () => {

    // INITIAL POSITION //
    const leftTranslateX = useSharedValue(-90)
    const leftTranslateY = useSharedValue(30)

    const rightTranslateX = useSharedValue(90)
    const rightTranslateY = useSharedValue(30)

    const topTranslateY = useSharedValue(-90)

    // INITIAL PDF OPACITY //
    const leftOpacity = useSharedValue(1)
    const rightOpacity = useSharedValue(1)
    const topOpacity = useSharedValue(1)
    

    // MERGED PDF //
    const mergedOpacity = useSharedValue(0)
    const mergedScale = useSharedValue(0.8)

    // ANIMATION DURATION //
    const MOVE_DURATION = 800
    const MERGE_DURATION = 300
    const HOLD_DURATION = 600
    const RETURN_DURATION = 800

    // INITAL DOTS LOADING //
    const dot1 = useSharedValue(0)
    const dot2 = useSharedValue(0)
    const dot3 = useSharedValue(0)

    useEffect(() => {

        // LEFT PDF POSITION //
        leftTranslateX.value = withRepeat(
            withSequence(
                // Move to center //
                withTiming(0, { duration: MOVE_DURATION }),
                
                // Wait while merged PDF appears //
                withTiming(0, {
                    duration: MERGE_DURATION + HOLD_DURATION,
                }),

                // Return to initial position //
                withTiming(-90, { duration: RETURN_DURATION }),
            ),
            -1,
            false
        ) 

        // RIGHT PDF POSITION //
        rightTranslateX.value = withRepeat(
            withSequence(
                // Move to center //
                withTiming(0, {duration: MOVE_DURATION}),

                // Wait while merged PDF appears //
                withTiming(0, {
                    duration: MERGE_DURATION + HOLD_DURATION,
                }),

                // Return to initial position //
                withTiming(90, { duration: RETURN_DURATION }),
            ),
            -1,
            false
        )

        // TOP PDF POSITION //
        topTranslateY.value = withRepeat(
            withSequence(
                // Move to center //
                withTiming(30, {duration: MOVE_DURATION}),

                // Wait while merged PDF appears //
                withTiming(30, {
                    duration: MERGE_DURATION + HOLD_DURATION,
                }),
                
                // Return to initial position //
                withTiming(-90, { duration: RETURN_DURATION }),
            ),
            -1,
            false
        )

        // ORIGINAL PDF OPACITY //
        const createOriginalOpacityAnimation = () => {
            return withRepeat(
                withSequence(
                    // Stay visible while moving //
                    withTiming(1, {duration: MOVE_DURATION}),

                    // Fade out when merge starts //
                    withTiming(0, {duration: MERGE_DURATION}),

                    // Stay invisible //
                    withTiming(0, {
                        duration: HOLD_DURATION,
                    }),

                    // Appears again //
                    withTiming(1, {duration: RETURN_DURATION}),
                ),
                -1,
                false
            )
        }

        leftOpacity.value = createOriginalOpacityAnimation()
        rightOpacity.value = createOriginalOpacityAnimation()
        topOpacity.value = createOriginalOpacityAnimation()


        // MERGED PDF OPACITY //
        mergedOpacity.value = withRepeat(
            withSequence(
                // Stay hidden during MOVE //
                withTiming(0, {
                    duration: MOVE_DURATION,
                }),

                // Appear //
                withTiming(1, {
                    duration: MERGE_DURATION,
                }),

                // Stay visible //
                withTiming(1, {
                    duration: HOLD_DURATION,
                }),

                // Disappear //
                withTiming(0, {
                    duration: RETURN_DURATION,
                }),
            ),
            -1,
            false
        )

        // MERGED PDF SCALE //
        mergedScale.value = withRepeat(
            withSequence(
                // Stay small and hidden during MOVE //
                withTiming(0.8, {
                    duration: MOVE_DURATION,
                }),

                // Grow //
                withTiming(1.1, {
                    duration: MERGE_DURATION / 2,
                }),

                // Small bounce //
                withTiming(1, {
                    duration: MERGE_DURATION / 2,
                }),

                // Stay normal //
                withTiming(1, {
                    duration: HOLD_DURATION,
                }),

                // Shrink while disappearing //
                withTiming(0.8, {
                    duration: RETURN_DURATION,
                }),
            ),
            -1,
            false
        )

        // DOTS LOADING POSITION //
        dot1.value = withDelay(
            0,
            withRepeat(
                withSequence(
                    withTiming(
                        1,
                        {
                            duration: 400
                        }
                    ),
                    withTiming(
                        0,
                        {
                            duration: 400
                        }
                    ),
                ),
                -1,
                false
            )
        )

        dot2.value = withDelay(
            200,
            withRepeat(
                withSequence(
                    withTiming(
                        1,
                        {
                            duration: 400
                        }
                    ),
                    withTiming(
                        0,
                        {
                            duration: 400
                        }
                    ),
                ),
                -1,
                false
            )
        )

        dot3.value = withDelay(
            400,
            withRepeat(
                withSequence(
                    withTiming(
                        1,
                        {
                            duration: 400
                        }
                    ),
                    withTiming(
                        0,
                        {
                            duration: 400
                        }
                    ),
                ),
                -1,
                false
            )
        )
    }, [])

    const leftAnimatedStyle = useAnimatedStyle(() => ({
        opacity: leftOpacity.value,
        transform: [
            {translateX : leftTranslateX.value},
            {translateY : leftTranslateY.value}
        ]
    }))

    const rightAnimatedStyle = useAnimatedStyle(() => ({
        opacity: rightOpacity.value,
        transform: [
            {translateX: rightTranslateX.value},
            {translateY: rightTranslateY.value}
        ]
    }))

    const topAnimatedStyle = useAnimatedStyle(() => ({
        opacity: topOpacity.value,
        transform: [
            {translateY: topTranslateY.value}
        ]
    }))
    
    const mergedPdfStyle = useAnimatedStyle(() => ({
        opacity: mergedOpacity.value,
        transform: [
            {translateY: 30},
            {scale: mergedScale.value}
        ]
    }))

    const dot1Style = useAnimatedStyle(() => ({
        transform: [
            {translateY: -4 * dot1.value},
            {scale: 1 + 0.15 * dot1.value}
        ],
        opacity: 0.4 + 0.6 * dot1.value
    }))

    const dot2Style = useAnimatedStyle(() => ({
        transform: [
            {translateY: -4 * dot2.value},
            {scale: 1 + 0.15 * dot2.value}
        ],
        opacity: 0.4 + 0.6 * dot2.value
    }))

    const dot3Style = useAnimatedStyle(() => ({
        transform: [
            {translateY: -4 * dot3.value},
            {scale: 1 + 0.15 * dot3.value}
        ],
        opacity: 0.4 + 0.6 * dot3.value
    }))

    return {
        leftAnimatedStyle,
        rightAnimatedStyle,
        topAnimatedStyle,
        mergedPdfStyle,
        dot1Style,
        dot2Style,
        dot3Style,
    }
}