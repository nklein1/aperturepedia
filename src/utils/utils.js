
export function getRandomString() {
  return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}

export function parseLensColumns(type) {
  let columnsToRender = [];
  if (type === 'minolta') {
    columnsToRender = [
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'slug': 'maxAperture'},
      {'name': 'Minimum Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'slug': 'elements'},
      {'name': 'Groups', 'slug': 'groups'},
      // {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Filter Thread (mm)', 'slug': 'frontFilterThread'},
      {'name': 'Lens Shade', 'slug': 'lensShade'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Style', 'slug': 'style'},
      {'name': 'Notes', 'slug': 'notes'}
    ];
  } else if (type === 'pentax') {
    columnsToRender = [
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'slug': 'maxAperture'},
      {'name': 'Minimum Aperture', 'slug': 'minAperture'},
      {'name': 'Lens Elements', 'slug': 'elements'},
      {'name': 'Lens Groups', 'slug': 'groups'},
      // {'name': 'Lens Blades', 'slug': 'blades'},
      // {'name': 'Filter Thread (mm)', 'slug': 'frontFilterThread'},
      {'name': 'Diaphram Type', 'slug': 'diaphramType'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Notes', 'slug': 'notes'}
    ];
  }
  return columnsToRender;
}

// Parse lens style to SCSS selector
export function parseClassFromStyle(lensType) {
  let str = '';
  if (lensType) {
    str = lensType.toLowerCase().replace(/\s+|-+/ig, '');
  }
  return str;
}
