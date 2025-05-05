<?php

namespace App\Domain\Ingredient\ValueObject;

use InvalidArgumentException;

class Quantity
{
  private float $value;

  public function __construct(float $value)
  {
    if ($value < 0) {
      throw new InvalidArgumentException('数量は0以上である必要があります');
    }
    $this->value = $value;
  }

  public function subtract(float $value): self
  {
    return new self(max(0, $this->value - $value));
  }

  public static function fromInt(int $value): self
  {
    return new self($value);
  }

  public function toInt(): int
  {
    return (int) $this->value;
  }
}
