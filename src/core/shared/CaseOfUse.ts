export default interface CaseOfUse<INPUT, OUTPUT> {
    execute(data: INPUT): Promise<OUTPUT>
}
