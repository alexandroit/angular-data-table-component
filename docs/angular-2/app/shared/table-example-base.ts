export class TableExampleBase {
  events = ['Ready'];

  get dataSnippet() {
    return this.getDataSnippet();
  }

  record(type: string, value: any) {
    var text = type + ': ' + this.safeJson(value);
    this.events.unshift(text.length > 220 ? text.slice(0, 220) + '...' : text);
    this.events = this.events.slice(0, 8);
  }

  clearEvents() {
    this.events = ['Ready'];
  }

  protected getDataSnippet() {
    return '[]';
  }

  protected safeJson(value: any) {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return String(value);
    }
  }
}
