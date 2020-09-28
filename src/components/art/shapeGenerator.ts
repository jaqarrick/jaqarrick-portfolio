const randomFill = ():string => {
    const fillColors = [
        'rgb(104, 106, 226)',
        'rgb(222, 222, 241)',
        'rgb(222, 222, 241)',
        'rgb(171, 171, 250)',
        'rgb(126, 126, 202)',
        'rgb(247, 238, 192)',
        'rgb(206, 120, 120)',
        'rgb(9, 37, 114)',
        'rgb(247, 179, 159)',
    ]
    return fillColors[Math.floor(Math.random()*fillColors.length)]
}

enum ShapeType {
    Rect = 'rect',
    Angle = 'angle'

}
export interface Shape {
    type: ShapeType,
    x1: number,
    y1: number,
    x2?: number,
    y2?: number,
    x3?: number,
    y3?: number,
    height?: number,
    width?: number,
    fill: string,
    strokeWidth?: number
}

const generateShapeObect = (type:ShapeType, svgHeight:number, svgWidth:number):Shape => {
    const gen = {
        genX: Math.floor(Math.random()*svgWidth),
        genY: Math.floor(Math.random()*svgHeight)
    }

    const strokeWidth = Math.floor(Math.random()*10)+5
    if(type === "angle") return {
        type: type,
        x1: gen.genX,
        y1: gen.genY,  
        x2: gen.genX,
        y2: gen.genY + (Math.floor(Math.random()*svgWidth-gen.genY-20))+20,
        x3: gen.genX + (Math.floor(Math.random()*svgWidth-gen.genX-20))+20,
        y3: gen.genY,
        fill: randomFill(),
        strokeWidth: strokeWidth
    }
   
    const maxHeight = svgHeight - gen.genY -200
    const maxWidth = svgWidth - gen.genX - 200
    return {
        type: type,
        x1: gen.genX,
        y1: gen.genY,
        fill: randomFill(),
        height: Math.floor(Math.random()*maxHeight)+50,
        width: Math.floor(Math.random()*maxWidth)+50
    }
    
}

const shapesGenerator = (numberOfShapes:number, svgHeight:number, svgWidth:number) => 
    [...Array(numberOfShapes)].map((_, index)=> {
        const types: ShapeType[] = [ShapeType.Angle, ShapeType.Rect]
        const type = types[Math.floor(Math.random()*types.length)]
        return generateShapeObect(type, svgHeight, svgWidth)
    })

const initialShapesGenerator = (svgHeight:number, svgWidth:number):Shape[] => {
    return [
        {
            type: ShapeType.Angle,
            x1: svgWidth*.90,
            y1: svgHeight*.05,
            x2: svgWidth*.1,
            y2: svgHeight*.05,
            x3: svgWidth*.90,
            y3: svgHeight*.95,
            fill: randomFill(),
            strokeWidth: 10
        },
        {
            type: ShapeType.Angle,
            x1: svgWidth*.80,
            y1: svgHeight*.1,
            x2: svgWidth*.2,
            y2: svgHeight*.1,
            x3: svgWidth*.80,
            y3: svgHeight*.85,
            fill: randomFill(),
            strokeWidth: 10
        },
        {
            type: ShapeType.Angle,
            x1: svgWidth*.70,
            y1: svgHeight*.15,
            x2: svgWidth*.3,
            y2: svgHeight*.15,
            x3: svgWidth*.70,
            y3: svgHeight*.80,
            fill: randomFill(),
            strokeWidth: 10,
        },
        {
            type: ShapeType.Rect,
            x1: svgWidth*.40,
            y1: svgHeight*.20,
            height: svgHeight*0.55,
            width: svgWidth*0.2,
            fill: randomFill()
        },
        {
            type: ShapeType.Rect,
            x1: svgWidth*.45,
            y1: svgHeight*.35,
            height: svgHeight*0.25,
            width: svgWidth*0.1,
            fill: randomFill()
        },
        {
            type: ShapeType.Rect,
            x1: svgWidth*.20,
            y1: svgHeight*.325,
            height: svgHeight*0.30,
            width: svgWidth*0.15,
            fill: randomFill()
        },
        {
            type: ShapeType.Rect,
            x1: svgWidth*.24,
            y1: svgHeight*.43,
            height: svgHeight*0.0725,
            width: svgWidth*0.0725,
            fill: randomFill()
        },
        {
            type: ShapeType.Rect,
            x1: svgWidth*.075,
            y1: svgHeight*.455,
            height: svgHeight*0.025,
            width: svgWidth*0.05,
            fill: randomFill()
        }
    ]
}

export {shapesGenerator, initialShapesGenerator}
