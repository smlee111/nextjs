import {useState, useRef} from "react";
import {loadMobileNetModel, classifyImage} from "../utils/model";

export default function Home() {
    const [imageURL, setImageURL] = useState<string>("");
    const [predictions, setPredictions] = useState<
        {className: string; probability: number}[]
    >([]); // 예측 결과 형식 변경
    const imageRef = useRef<HTMLImageElement | null>(null);

    const handleImageChange = async () => {
        if (imageRef.current) {
            const model = await loadMobileNetModel();
            const predictions = await classifyImage(model, imageRef.current);

            setPredictions(predictions);
        }
    };

    return (
        <div>
            <h1>인공지능 모델과 Next.js</h1>
            <input
                type="text"
                placeholder="이미지 URL 입력"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
            />
            <button onClick={handleImageChange}>이미지 분류</button>
            <br />
            <img
                src={imageURL}
                alt="분류할 이미지"
                ref={imageRef}
                style={{display: "none"}}
            />
            <div>
                <h2>예측 결과:</h2>
                <ul>
                    {predictions.map((prediction, index) => (
                        <li key={index}>
                            {`Class ${index}: ${prediction.className} (확률: ${(
                                prediction.probability * 100
                            ).toFixed(2)}%)`}{" "}
                            {/* 확률 표시 추가 */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
