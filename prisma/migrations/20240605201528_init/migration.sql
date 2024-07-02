-- CreateTable
CREATE TABLE `Result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tax_name` VARCHAR(191) NOT NULL,
    `tax_base` VARCHAR(191) NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `rate` VARCHAR(191) NOT NULL,
    `minimum` DOUBLE NOT NULL,
    `price_add` DOUBLE NOT NULL,
    `tax_price` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `result_code` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
