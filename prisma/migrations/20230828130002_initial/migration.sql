-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "country" TEXT,
    "usage" TEXT,
    "alpha" DOUBLE PRECISION,
    "alphaLow" DOUBLE PRECISION,
    "alphaHigh" DOUBLE PRECISION,
    "beta" DOUBLE PRECISION,
    "betaLow" DOUBLE PRECISION,
    "betaHigh" DOUBLE PRECISION,
    "caryophyllene" DOUBLE PRECISION,
    "caryophylleneLow" DOUBLE PRECISION,
    "caryophylleneHigh" DOUBLE PRECISION,
    "cohumulone" DOUBLE PRECISION,
    "cohumuloneLow" DOUBLE PRECISION,
    "cohumuloneHigh" DOUBLE PRECISION,
    "farnesene" DOUBLE PRECISION,
    "farneseneLow" DOUBLE PRECISION,
    "farneseneHigh" DOUBLE PRECISION,
    "humulene" DOUBLE PRECISION,
    "humuleneLow" DOUBLE PRECISION,
    "humuleneHigh" DOUBLE PRECISION,
    "myrcene" DOUBLE PRECISION,
    "myrceneLow" DOUBLE PRECISION,
    "myrceneHigh" DOUBLE PRECISION,
    "totalOil" DOUBLE PRECISION,
    "totalOilLow" DOUBLE PRECISION,
    "totalOilHigh" DOUBLE PRECISION,
    "purpose" TEXT,
    "flavor" TEXT,
    "notes" TEXT,
    "styles" TEXT[],

    CONSTRAINT "Hop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
