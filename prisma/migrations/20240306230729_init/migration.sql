-- CreateTable
CREATE TABLE "clicker" (
    "id" INTEGER NOT NULL,
    "balance" TEXT,
    "clickMultiplier" TEXT,

    CONSTRAINT "clicker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clicker_id_key" ON "clicker"("id");
