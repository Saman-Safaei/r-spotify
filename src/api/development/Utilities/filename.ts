export default function url(strings:TemplateStringsArray, ..._:any[]) {
    return '/api' + strings[0]
}