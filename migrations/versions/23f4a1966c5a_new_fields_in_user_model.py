"""new fields in user model

Revision ID: 23f4a1966c5a
Revises: dcc8cd1a5392
Create Date: 2022-01-24 16:15:25.127688

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "23f4a1966c5a"
down_revision = "dcc8cd1a5392"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("user", sa.Column("about_me", sa.String(length=140), nullable=True))
    op.add_column("user", sa.Column("last_seen", sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("user", "last_seen")
    op.drop_column("user", "about_me")
    # ### end Alembic commands ###
