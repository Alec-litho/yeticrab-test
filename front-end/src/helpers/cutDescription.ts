

export default function cutDescription(desc: string, size: number) {
    const str = desc.split("").slice(0, size).join("") 
    return str.length === size? str + "..." : str
}