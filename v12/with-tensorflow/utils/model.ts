import * as mobilenet from "@tensorflow-models/mobilenet";

export async function loadMobileNetModel() {
    const model = await mobilenet.load();
    return model;
}

export async function classifyImage(
    model: mobilenet.MobileNet,
    imageElement: HTMLImageElement
) {
    const predictions = await model.classify(imageElement);
    return predictions;
}
