/// You have _n_ doors in a row that are all initially opened. You make _n_ passes by the doors.
///
/// The first time though, you visit every door and toggle the door (open if it's closed, closed
/// if it is opened).
///
/// The second time you only visit every 2nd door (door 2, 4, 6, ...)
///
/// The third time you visit every 3rd door (3, 6, 9, ...) until you visit the nth door.
///
/// Return the state of the doors after the last pass. True if it's open, false if it's closed.

export function toogle_doors(number_of_doors: number): Array<boolean> {
  const hotel = new Array(number_of_doors);
  hotel.fill(true);
  console.log(`intial state: \n     ${hotel}`);

  for (let passes = 1; passes <= number_of_doors; passes++) {
    console.log(`pass number ${passes}`);

    for (let door_n = passes; door_n <= number_of_doors; door_n = door_n + passes) {
      console.log(`Door number= ${door_n}`)
      // change to the opposite
      console.log(`changing hotel[${door_n}]: ${hotel[door_n]} to ${!hotel[door_n]}`)
      hotel[door_n -1] = !hotel[door_n-1];

    }
    console.log(`result of the ${passes} pass:\n     ${hotel}`);
  }
  return hotel;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  toogle_doors(2);
}
