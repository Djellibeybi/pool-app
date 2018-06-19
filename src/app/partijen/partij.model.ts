export class Partij {
  private speler1: string;
  private speler2: string;

  private winnaar = 0; // speler1 = 1, speler2 = 2, default 0 is nog niet gezet.

  public constructor ( speler1: string, speler2: string) {
    this.speler1 = speler1;
    this.speler2 = speler2;
  }

  public getPartij() {
    return this.speler1 + ' breekt en speelt tegen ' + this.speler2;
  }

  public setWinnaar(speler: string) {
    if (speler === this.speler1) { this.winnaar = 1; }
    if (speler === this.speler2) { this.winnaar = 2; }
  }

  public getWinnaar() {
    return this.winnaar;
  }

  public getSpeler1() {
    return this.speler1;
  }

  public getSpeler2() {
    return this.speler2;
  }
}
