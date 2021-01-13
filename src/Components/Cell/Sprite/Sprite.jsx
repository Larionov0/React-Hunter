export default function Sprite({ width, height, img_src }) {
    return (
        <div style={{ width: width, height: height }}>
            <img src={img_src} alt="" style={{ width: width, height: height }} />
        </div>
    )
}