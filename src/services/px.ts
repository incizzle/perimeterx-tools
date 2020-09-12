export function obfuscateString(text: any, factor: number = 50) {
    var e = ""
    for (let r in text) {
        e += String.fromCharCode(factor ^ text.charCodeAt(r));
    }
    return e
}
