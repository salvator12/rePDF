import { ImageSourcePropType, Image, View, Text, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { styles } from './DragCard.styles'
import { colors } from '@/constants/colors'


interface DragCardProps {
    title: string,
    subTitle: string,
    DragIconImage:ImageSourcePropType,
    LogoImage:ImageSourcePropType,
    
    onPreviewPress?: () => void;
    onDeletePress?: () => void;
    onDrag?: () => void,
    isDragging?: boolean,
    showDragIcon?: boolean
}

export default function DragCard({
    title,
    subTitle,
    DragIconImage,
    LogoImage,
    onPreviewPress,
    onDeletePress,
    onDrag,
    isDragging,
    showDragIcon = true
}: DragCardProps) {
    return (
        <TouchableHighlight
            style={styles.Dragbtn}
            onLongPress={onDrag}
        >
            <View style={styles.container}>
                {showDragIcon && DragIconImage && (
                    // <Pressable
                    //     onLongPress={onDrag}
                    // >
                    //     <Image
                    //         source={DragIconImage}
                    //         style={[styles.dragIcon, isDragging && styles.Dragged]}
                    //         resizeMode='contain'
                    //     />
                    // </Pressable>
                    <Image
                        source={DragIconImage}
                        style={[styles.dragIcon, isDragging && styles.Dragged]}
                        resizeMode='contain'
                    />
                )}
                {LogoImage && (
                    <Image
                        source={LogoImage}
                        resizeMode='contain'
                    />
                )}
                <View style={styles.TextContainer}>
                    <Text
                        style={styles.title}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {title}
                    </Text>
                    {subTitle && (
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    )}
                </View>
                {showDragIcon && (
                    <Pressable
                        onPress={onPreviewPress}
                        style= {({ pressed }) => pressed && styles.pressed} 
                    >
                        <Ionicons
                            name='eye-outline'
                            size={24}
                            color={colors.textSecondary}
                        />
                    
                    </Pressable>
                )}
                {showDragIcon && (
                    <Pressable
                        onPress={onDeletePress}
                        style= {({ pressed }) => pressed && styles.pressed} 
                    >
                        <Ionicons
                            name='trash-outline'
                            size={24}
                            style={styles.trashIcon}
                        />
                    
                    </Pressable>
                )}
            </View>
        </TouchableHighlight>
    )
}