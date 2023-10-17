def split_text_into_sections(filename, num_sections):
    with open(filename, 'r') as file:
        content = file.read()

        section_length = len(content) // num_sections

        sections = [content[i * section_length:(i + 1) * section_length] for i in range(num_sections)]

    return sections

filename = 'output_audio.txt'
num_sections = 4

sections = split_text_into_sections(filename, num_sections)
print('First Section:\n', sections[3])