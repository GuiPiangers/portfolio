import './Circle.css'

export default function Circle({children, initialPosition, finalPosition}){
    return(
        <div className="circle" 
        style={{'--initial-posiotion-y': initialPosition?.y, '--initial-posiotion-x': initialPosition?.x,
            '--final-posiotion-y': finalPosition?.y, '--final-posiotion-x': finalPosition?.x 
        }}>
            {children}
        </div>
    )
}