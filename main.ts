player.onChat("Дім", function () {
    blocks.fill(
    YELLOW_CONCRETE,
    pos(1, 0, 24),
    pos(24, 31, 1),
    FillOperation.Replace
    )
    blocks.fill(
    LIGHT_BLUE_CONCRETE,
    pos(11, 0, 1),
    pos(11, 31, 1),
    FillOperation.Replace
    )
    blocks.fill(
    LIGHT_BLUE_CONCRETE,
    pos(14, 0, 1),
    pos(14, 31, 1),
    FillOperation.Replace
    )
    blocks.fill(
    LIGHT_BLUE_CONCRETE,
    pos(14, 0, 24),
    pos(14, 31, 24),
    FillOperation.Replace
    )
    blocks.fill(
    LIGHT_BLUE_CONCRETE,
    pos(11, 0, 24),
    pos(11, 31, 24),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    pos(2, 1, 23),
    pos(23, 30, 2),
    FillOperation.Replace
    )
    for (let index = 0; index <= 5; index++) {
        blocks.fill(
        AIR,
        pos(2, 2 + index * 5, 23),
        pos(23, 5 + index * 5, 2),
        FillOperation.Replace
        )
    }
    blocks.fill(
    BLUE_STAINED_GLASS,
    pos(1, 3, 1),
    pos(23, 30, 1),
    FillOperation.Replace
    )
    blocks.fill(
    PURPLE_CONCRETE,
    pos(11, 1, 2),
    pos(11, 30, 23),
    FillOperation.Replace
    )
    blocks.fill(
    PURPLE_CONCRETE,
    pos(2, 1, 11),
    pos(23, 30, 11),
    FillOperation.Replace
    )
    blocks.place(PLANKS_BIRCH, pos(12, 0, -3))
    blocks.fill(
    PLANKS_BIRCH,
    pos(12, 1, -2),
    pos(12, 1, 0),
    FillOperation.Replace
    )
    blocks.place(IRON_DOOR, pos(12, 2, 1))
    blocks.place(STONE_PRESSURE_PLATE, pos(12, 2, 2))
    blocks.place(PLANKS_BIRCH, pos(10, 0, -3))
    blocks.fill(
    PLANKS_BIRCH,
    pos(10, 1, -2),
    pos(10, 1, 0),
    FillOperation.Replace
    )
    blocks.place(IRON_DOOR, pos(10, 2, 1))
    blocks.place(STONE_PRESSURE_PLATE, pos(10, 2, 2))
    for (let index = 0; index <= 5; index++) {
        blocks.fill(
        WARPED_DOOR,
        pos(12, 2 + index * 5, 11),
        pos(12, 2 + index * 5, 11),
        FillOperation.Replace
        )
    }
    for (let index = 0; index <= 5; index++) {
        blocks.fill(
        WARPED_DOOR,
        pos(10, 2 + index * 5, 11),
        pos(10, 2 + index * 5, 11),
        FillOperation.Replace
        )
    }
})
player.onChat("Вулкан", function () {
    shapes.circle(
    WATER,
    pos(0, -1, 0),
    100,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 0, 0),
    50,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 1, 0),
    49,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 2, 0),
    48,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 3, 0),
    47,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 4, 0),
    46,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 5, 0),
    45,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 6, 0),
    44,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 7, 0),
    43,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 8, 0),
    42,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 9, 0),
    41,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 10, 0),
    40,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 11, 0),
    39,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 12, 0),
    38,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 13, 0),
    37,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 14, 0),
    36,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 15, 0),
    35,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 16, 0),
    34,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 17, 0),
    33,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 18, 0),
    32,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 19, 0),
    31,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 20, 0),
    30,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 21, 0),
    29,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 22, 0),
    28,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 23, 0),
    27,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 24, 0),
    26,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 25, 0),
    25,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    LAVA,
    pos(0, 25, 0),
    24,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 26, 0),
    24,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 27, 0),
    23,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 28, 0),
    22,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 29, 0),
    21,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 30, 0),
    20,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 31, 0),
    19,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 32, 0),
    18,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 33, 0),
    17,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 34, 0),
    16,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 35, 0),
    15,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 36, 0),
    14,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 37, 0),
    13,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 38, 0),
    12,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 39, 0),
    11,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 40, 0),
    10,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    MAGMA_BLOCK,
    pos(0, 41, 0),
    9,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLACKSTONE,
    pos(0, 42, 0),
    8,
    Axis.Y,
    ShapeOperation.Outline
    )
})
